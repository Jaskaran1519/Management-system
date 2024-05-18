import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_HYGRAPH_KEY +
  "/master";

export const getCourseList = async () => {
  const query = gql`
    query CourseList {
      courseLists {
        name
        banner {
          url
        }
        description
        id
        totalEpisode
        tag
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export const getCourseById = async (id) => {
  const query =
    gql`
    query course {
      courseList(where: { id: "` +
    id +
    `" }) {
        name
        totalEpisode
        description
        video {
          url
        }
        youtubelink
        id
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
