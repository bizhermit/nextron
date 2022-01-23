# Nextron

Next.jsをベースにElectronを使用したアプリケーションを構築するライブラリです。

pages/apiのハンドラーを、開発時と本番（実行ファイル）時の両方で使用するための仕組みや、ウィンドウを操作するためのアクセサーを提供します。

---

## 使用方法

ファイルの配置や設定情報等を説明すると長くなるので、[@bizhermit/starter](https://www.npmjs.com/package/@bizhermit/starter)を使用して作成されたものを参考にしてください。

```ts
// src-nextron/index.ts (@bizhermit/starterを使用して作成した場合)

import execute from "@bizhermit/nextron";

execute({/* config */});
```

---

## 設定値
executeのconfig（第一引数）に指定できるプロパティの一覧です。

#### rootDirname?: string
nextのルートディレクトリ  
初期値: ./src

#### i18nFilename?: string
i18nファイルパス  
初期値：./src/i18n.json

#### menubar?: boolean
メニューバーの表示  
初期値：false

#### openDevTools?: boolean
開発者ツールの起動  
初期値: false

#### dev?.port?: number
開発モード: ポート番号  
初期値: 8000

#### dev?.i18nFilename?: string
開発モード: i18nファイルパス
初期値: ./src/i18n.json

#### dev?.menubar?: boolean
開発モード: メニューバー
初期値: true

#### dev?.openDevTools?: boolean
開発モード: 開発者ツールの起動
初期値: true

#### width?: number
ウィンドウの幅
初期値: 1280

#### height?: number
ウィンドウサイズの高さ
初期値: 720

#### minWidth?: number
ウィンドウサイズの幅の最小値
初期値: 0

#### minHeight?: number
ウィンドウサイズの高さの最小値
初期値: 0

#### maxWidth?: number
ウィンドウサイズの幅の最大値
初期値: null

#### maxHeight?: number
ウィンドウサイズの高さの最大値
初期値: null

#### resizable?: boolean
ウィンドウのリサイズ可不可
初期値: true

#### useContentSize?: boolean
サイズ指定のサイズは、コンテンツのサイズかウィンドウのサイズか（trueでコンテンツ）
初期値: false

#### fullscreen?: boolean
ウィンドウをフルスクリーンモードで起動
初期値: false

#### fullscreenable?: boolean
ウィンドウのフルスクリーンモードを許可
初期値: true

#### minimizable?: boolean
ウィンドウの最小化ボタンを表示する
初期値: true

#### maximizable?: boolean
ウィンドウの最大化ボタンを表示する
初期値: true

#### closable?: boolean
ウィンドウの閉じるボタンを表示する
初期値: true

#### position?: { x: number; y: number; } | "center" | "left-top" | "right-bottom"
ウィンドウの初期表示位置
初期値: null（画面中央）

#### movable?: boolean
ウィンドウの移動を許可
初期値: true

#### opacity?: number
ウィンドウの不透明度（0：透明 ～ 1: 不透明）
初期値: 1

#### focusable?: boolean
ウィンドウのフォーカス許可
初期値: true

#### alwaysOnTop?: boolean
ウィンドウを常に手前に表示する
初期値: false

#### skipTaskbar?: boolean
アプリケーションアイコン起動時、タスクバーにアイコンを表示する
初期値: false

#### title?: string
ウィンドウに表示する文字列
初期値: null（ブランク表示）

#### frame?: boolean
ウィンドウのフレームの表示（falseにするとタイトルや閉じるボタン等が非表示になります）
初期値: true

#### hasShadow?: boolean
ウィンドウの影
初期値: true

#### theme?: string（"light" | "dark"）
レイアウトテーマ（任意の文字列：デフォルト実装では"light"と"dark"のみ）
初期値: light

---

## アクセサー

用意されたアクセサーを使用することで、フロントエンド側やapiから簡単にウィンドウを操作できます。

```ts
import nextronAccessor, { useNextron } from "@bizhermit/nextron/dist/accessor"

// React
const Component = () => {
  const nextron = useNextron;
  useEffect(() => {
    nextron.setSize({ width: 300, height: 300, animate: true });
  }, []);
  return <></>;
};

// other
const func = () => {
  const nextron = nextronAccessor();
  nextron.setSize({ width: 300, height: 300, animate: true });
};
```

### メソッド

#### fetch(path: string, params: {[key: string]: any}) => Promise<any>
Next.jsで使用するpages/apiのハンドラーを呼び出すメソッドです。  
[@bizhermit/next-absorber](https://www.npmjs.com/package/@bizhermit/next-absorber)のfetchApiを使用することで、Webアプリケーションと同じ書き方で使用することができます。

#### language(locale: string) => {[key: string]: any}
localeを設定します。

#### setSize(params: { width?: number; height?: number; animate?: boolean; }) => boolean
ウィンドウサイズを設定します。

#### getSize() => { height: number; width: number; }
ウィンドウサイズを返します。

#### setAlwaysOnTop(alwaysOnTop: boolean) => boolean
ウィンドウを常に手前に表示するかどうかを設定します。

#### isAlwaysOnTop() => boolean
ウィンドウが常に手前に表示されるように設定されているかどうかを返します。

#### minimize() => { height: number; width: number; }
ウィンドウを最小化し、ウィンドウサイズを返します。

#### unminimize() => { height: number; width: number; }
ウィンドウの最小化を解除し、ウィンドウサイズを返します。

#### isMinimize() => boolean
ウィンドウが最小化されているかどうかを返します。

#### maximize() => { height: number; width: number; }
ウィンドウを最大化し、ウィンドウサイズを返します。

#### unmaximize() => { height: number; width: number; }
ウィンドウの最大化を解除し、ウィンドウサイズを返します。

#### isMaximize() => boolean
ウィンドウが最大化されているかどうかを返します。

#### setFullScreen(fullScreen: boolean) => boolean
ウィンドウをフルスクリーンモードを設定し、フルスクリーンモードかどうかを返します。

#### isFullScreen() => boolean
ウィンドウがフルスクリーンモードかどうかを返します。

#### setOpacity(opacity: number) => number
ウィンドウの不透明度を設定し、不透明度を返します。

#### getOpacity() => number
ウィンドウの不透明度を返します。

#### close() => void
ウィンドウ（アプリケーション）を終了します。

#### destory() => void
ウィンドウを破棄します。

#### focus() => void
ウィンドウにフォーカスします。

#### blur() => void
ウィンドウのフォーカスを解除します。

#### hasFocus() => boolean
ウィンドウがフォーカスを持っているかどうかを返します。

#### notification(title: string, options: NotificationOptions) => Promise<void>
PCに通知します。

#### setPosition(params: { position: { x: number; y: number; } | "center" | "left-top" | "right-bottom"; animate?: boolean; }) => { x: number; y: number; }
ウィンドウの表示位置を設定し、表示位置を返します。

#### setTheme(theme: "light" | "dark") => string
テーマを設定し、設定されたテーマを返します。  
設定はセッション情報に保持されます。

#### getTheme() => string
設定されているテーマを返します。

#### getSession(key?: string) => any
セッションに保持されている値を取得します。（ここでのセッションは、アプリケーション起動時に作成され、アプリケーション終了まで保持される連想配列です）  
keyが指定されない場合は、全ての値（連想配列）を返します。

#### setSession(key: string, value: any) => void
セッションに値を設定します。

#### clearSession(key: string) => void
セッションに保持されている値を削除します。