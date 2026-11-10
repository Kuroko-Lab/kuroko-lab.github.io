// ▼ セットアップで作った値を貼る（どれも公開されて問題ない値。APIキーは公開先のドメインとDrive APIだけに制限しておく）
export const CONFIG = {
  // Apps Script を「ウェブアプリ」として公開したときのURL（…/exec）
  GAS_URL: 'https://script.google.com/macros/s/AKfycbzOGs1ioHe5GGX-tRSVFQJc1IuCniob1hB2xi6LBZx2vwG_Q9dzvzc2cCKHq5SX6qc8/exec',
  // Google Cloud の「OAuth クライアント ID」（送信ページのログイン用）
  CLIENT_ID: '54763156068-7il5m1ouqpp5r7hnv39vpfon375bgocd.apps.googleusercontent.com',
  // Google Cloud の「APIキー」（受け取りページが暗号化ファイルを読み出す用）
  API_KEY: 'AIzaSyBcgvIXmk59YBHCK_WS3hw1B8MNPs0Bj_4',
  // 送信ページにログインする Google アカウント（Apps Script の setup を実行したアカウント）
  OWNER_EMAIL: 'huryca369@gmail.com',
  // 以下は検証用（通常は触らない）
  DRIVE_BASE: 'https://www.googleapis.com',
  DEV_TOKEN: '',
};
