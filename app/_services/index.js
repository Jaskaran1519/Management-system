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
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export const getCourseBYId = async (id) => {
  const query = gql``;
  const result = await request(MASTER_URL, query);
  return result;
};
