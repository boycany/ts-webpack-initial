//unknown?

let name1: unknown = "bruce";
name1 = 999;

//斷言?

let name2: unknown = "red";

let name3 = name2 as number;

//斷言應用

async function getData() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = (await response.json()) as {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    };

    console.log("data.title :>> ", data.title);
}

getData();

//any 與 unknown

const liveStatus = true;

function getLiveName() {
    let liveName: unknown; 
    //如果這邊宣告類型為 any 的話，下面使用 result.split()就可能會發生錯誤
    if (liveStatus) {
        liveName = "Bruce Live";
    } else {
        liveName = null;
    }
    return liveName;
}

const result = getLiveName();
if (typeof result === "string") {
    //宣告類型為unknown時，ts會提示說這邊要加一個類型的判定
    result.split("");
}
