import axios from "axios";
import { GetTestDataResponse, TestData } from "./types/TestType";

export async function getTestData() {
    try{
        const {data, status} = await axios.get<TestData[]>(
            'http://localhost:8000/api/tests/',
            {
                headers: {
                    Accept: 'application/json',
                },
            }
        );
        return data;
        }
     catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message);
          return undefined;
        } else {
          console.log('unexpected error: ', error);
          return undefined;
        }
      }
 
    
}