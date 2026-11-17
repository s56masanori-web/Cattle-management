// ===== 長島牧場の設定 =====
// このファイルの名前を「farm-config.js」に変えて、長島牧場の index.html と同じ場所（GitHub）に置きます。
window.FARM_CONFIG = {
  farmId: 'nagashima',
  firebase: {
    apiKey: "AIzaSyB-18xHVDPOUXbZgNK0myFlVCrwmAfUZbU",
    authDomain: "nagashima-breeding.firebaseapp.com",
    databaseURL: "https://nagashima-breeding-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "nagashima-breeding",
    storageBucket: "nagashima-breeding.firebasestorage.app",
    messagingSenderId: "518336264785",
    appId: "1:518336264785:web:d1962685158a270302d670"
  },
  dataPath: 'data/farm',
  vetPath: 'vet/farm',
  farm: {
    name: '長島牧場',
    owner: '長島正典',
    ownerSpaced: '長島　正典',
    zip: '〒083-0042',
    address: '北海道中川郡池田町字千代田141-3',
    addressShort: '池田町字千代田141-3',
    addressCounty: '中川郡池田町字千代田141-3',
    addressArea: '池田町千代田',
    vetName: '長島正典',
    vetNameSpaced: '長島　正典',
    vetRegNo: '',
    license: '',
    clinicName: '',
    aiStationName: ''
  },
  // 授精証明書の証明者の欄（家畜人工授精師）
  aiCertSigner: [
    '家畜人工授精師　免許番号　十第2325号',
    '住　所　中川郡池田町字千代田141-3',
    '氏　名　長島　正典　　　㊞'
  ],
  // 使わない機能：移植証明書・外部授精簿は出さない。薬品管理ツールは使わない
  // 薬は繁殖管理の「薬の記録」に入れる。牛群リストと、子牛の去勢・除角の表示を使う
  features: { etCert: false, vetTool: false, barnList: true, calfFlags: true, extInsem: false, calfYear: true },
  // calfYear：子牛タブは開いたとき今年度（4月〜）生まれだけを出す。年度は選び直せる
  // 窒素タンクのキャニスターの色（精液の保管場所で選べる。いくつでも選べる）
  canisters: ['赤', '青', '黄', '緑', '黒', '白'],
  // 鼻紋：この日より前に生まれた子牛は取ってある（N-22(7)・2026/10/26生まれから後がまだ）。最初に開いたとき1回だけ印を付ける
  nosePrintDoneBefore: '2026-10-26',
  // 受胎率を数え始める日：AIは2026/11/15から（昔の結果・自然交配は入れない）、ETは2026/7/21から
  statsFrom: { ai: '2026-11-15', et: '2026-07-21' },
  // 発情で授精を見送るとき「受け牛に回す」を選べる（自然発情→ET か CIDRプログラムの予定を作る）
  estrusRecipient: true,
  // ツールを開いたときの最初の画面（'home' = ホーム。書かなければタスク）
  startTab: 'home',
  // 子牛牛舎以外の牛舎にいる子牛は「移動済み」にする（移動を検討の数に入れない）
  calfBarn: '子牛牛舎',
  // 出さない画面・ボタン：採卵記録、牛の画面の「繁殖履歴」「治療・投薬」タブ（ストーリーにまとめる）、授精簿の移植証・ドナーの列
  hide: ['collection', 'breedHistory', 'vetTab', 'etCol', 'syncCol'],
  // 産室は使わない：「🏠 産室移動」のタスクを出さない
  sanshitsuTask: false,
  autoNegReinsem: true,
  // 新しい画面の作り（下のメニュー：ホーム／タスク／＋記録／牛／その他）を使う
  newUI: true,   // もう一度授精したら、前の授精を自動で「不受胎」にする
  // 色の見分けがつきにくい人向け：授精簿のAI・ETを色ではなく「AI」「ET」の札で見分ける
  colorSafe: true,
  // タスク画面の上のお知らせと、ホームの「要注意の牛」を、たたんで見出しと頭数だけにする
  compactAlerts: true,
  // 子牛の予定：生まれて何日目にタスクを出すか（除角は生後2週間。去勢は日数が決まったら castrate: 日数 を足す）
  calfTasks: { dehorn: 14 },
  // 牛群（ファームノートと同じ並び）
  barns: ['繁殖牛舎', '子牛牛舎', '屋外牛舎A', '屋外牛舎B', '多目的牛舎A', '多目的牛舎B', '多目的牛舎C', '去勢牛舎', '育成牛舎', '育成肥育牛舎',
    '肥育牛マスA', '肥育牛マスB', '肥育牛マスC', '肥育牛マスD', '肥育牛マスE'],
  // 妊鑑：AIは妊娠45日の1回、ETは45日と60日
  preg: { ai: [45], et: [45, 60] },
  etRateExclude: [],
  excludeEmbryoYear: ''
};
