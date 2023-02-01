import { TestData } from "../../types/TestType";

interface ITestTile {
    testData : TestData;
}

function TestTile(props : ITestTile) {
    const {testData} = props;
    return(
        <>
        <h1>{testData.title}</h1>
        <h2>{testData.description}</h2>
        </>
    );
}


export default TestTile;