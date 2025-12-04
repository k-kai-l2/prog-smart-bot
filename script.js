// ==========================================
// 課題：空気を読むチャットボットを作ろう
// ==========================================

// 1. ボットの状態（ステータス）を定義しよう
// 例：mood(機嫌), energy(元気), love(好感度) など
let botState = {
    mood: 50,  // 0〜100で管理。50が普通。
    // ★ここに自分の作りたいパラメータを追加してもよい
};

// 2. ボットの記憶（メモリ）を定義しよう
// 会話の中で覚えた情報をここに入れる
let botMemory = {
    userName: null, // ユーザーの名前
    like: null      // ユーザーの好きなもの
};

// 3. 会話データ（辞書）を作ろう
// 「どんな言葉が来たら」「どう返すか」「ステータスをどう変えるか」のリスト
const responseData = [
    // パターン1: 挨拶
    {
        keyword: /こんにちは|ハロー/,  // 正規表現
        response: "やあ、こんにちは！",
        moodChange: 5 // 機嫌が少し良くなる
    },
    // パターン2: 名前を教えられた時（正規表現のグループ機能を使う）
    {
        keyword: /私の名前は(.*)です/, 
        response: "{name}さんですね、覚えました！",
        action: "saveName", // 特別な動作（関数）を指定
        moodChange: 10
    },
    // ★ここにCopilotを使って、自分のキャラに合わせた会話パターンを増やそう
    // ヒント：「ツンデレキャラの会話パターンを、このデータ構造で5個作って」とCopilotに頼む
];


// ==========================================
// ここから下がプログラムの本体（ロジック）
// コメントの指示に従って、Copilotと一緒に中身を埋めよう
// ==========================================

// HTMLの要素を取得（変更禁止）
const chatHistory = document.getElementById('chat-history');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const statusDisplay = document.getElementById('bot-status');

// 送信ボタンが押された時の処理
sendBtn.addEventListener('click', () => {
    const text = userInput.value;
    if (text === "") return;

    // 1. ユーザーのメッセージを表示
    addMessage(text, 'user');
    userInput.value = '';

    // 2. ボットの処理を実行（少し時間を置く演出）
    setTimeout(() => {
        const reply = processBotLogic(text); // ボットの思考回路
        addMessage(reply, 'bot');
        updateStatusDisplay(); // 画面のステータス表示を更新
    }, 800);
});


/**
 * ★課題A：ボットの思考回路を作る関数
 * 入力テキストを受け取り、返信内容を決定して返す
 */
function processBotLogic(text) {
    let replyText = "えーっと、よくわからないな..."; // デフォルトの返事

    // TODO: responseData 配列をループして、入力テキストにマッチするキーワードを探す
    // ヒント：Copilotに「responseDataを検索して、keywordにマッチするものがあったら返答を返すコードを書いて」と聞く
    
    
    // TODO: もし action が "saveName" だったら、saveName関数を呼び出す
    
    
    // TODO: moodChange が設定されていたら、updateMood関数を呼び出す


    // TODO: 返信テキストの中に "{name}" が含まれていたら、記憶している名前に置き換える
    
    
    return replyText;
}

/**
 * ★課題B：名前を記憶する関数
 * 正規表現の結果から名前部分を取り出して botMemory に保存する
 */
function saveName(matchResult) {
    // TODO: マッチした結果（matchResult）から名前を取り出して botMemory.userName に代入する
    // ヒント：matchResult[1] に名前が入っているはず
}

/**
 * ★課題C：機嫌（ステータス）を更新する関数
 */
function updateMood(amount) {
    // TODO: botState.mood に amount を足す
    // 0未満や100を超えないように制限するとさらに良い
}

/**
 * ★課題D：画面のステータス表示を更新する関数
 */
function updateStatusDisplay() {
    // TODO: botState.mood の値によって、表示する文字を変える
    // 例：80以上なら「上機嫌」、30以下なら「不機嫌」など
    // ヒント：document.getElementById('bot-status').textContent を書き換える
}

/**
 * 画面にメッセージを追加する関数（ここは完成済み）
 */
function addMessage(text, sender) {
    const div = document.createElement('div');
    div.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    div.textContent = text;
    chatHistory.appendChild(div);
    chatHistory.scrollTop = chatHistory.scrollHeight; // 一番下にスクロール
}