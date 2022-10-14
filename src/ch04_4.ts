// enum 枚舉

// 假設直播的情境：
// 0 -> 關播
// 1 -> 開播
// 2 -> 多人連線開播

enum LiveStatus {
    'streaming' = 0,
    'closed' = 1,
    'multiple' = 2
}

let liveStatus = 0

if(liveStatus === LiveStatus.streaming){
    //.....
}