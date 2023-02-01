export type TestData = {
    id : number;
    title : string;
    description : string;
}

export type GetTestDataResponse = {
    data : TestData[];
}