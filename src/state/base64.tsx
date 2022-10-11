/**
 * Base64文字列をBlobオブジェクトに変換する。
 *
 * サンプルコード
 * ```
 *    //PDF
 *    base64ToBlob(base64バイナリ文字列, 'application/pdf');
 *    //画像
 *    base64ToBlob(base64バイナリ文字列, 'image/jpeg');
 * ```
 * @param base64 Base64文字列
 * @param type MIMEコンテンツタイプ
 * @returns Blobオブジェクト
 */
export const base64ToBlob = (base64: string | undefined, type?: string) => {
  if (base64 === undefined) {
    return;
  }
  const str = window.atob(base64);
  //UTF-16文字コードのバイト配列に変換
  var byteAry = new Uint8Array(str.length);
  for (var i = 0; i < str.length; i++) {
    byteAry[i] = str.charCodeAt(i);
  }
  //Blobオブジェクトを作成
  return new Blob([byteAry.buffer], { type });
};

/**
 * BlobオブジェクトをBase64文字列に変換する。
 * @param blob Blobオブジェクト
 * @returns Base64文字列
 */
export const blobToBase64 = async (blob: Blob | undefined) => {
  if (blob === undefined) {
    return;
  }
  console.log(typeof blob);
  console.log(blob);
  //Blobオブジェクトから8ビット符号なし整数値配列を取得
  const unit8Array = new Uint8Array(await blob.arrayBuffer());
  //配列の整数値を文字コード変換して連結した文字列取得
  const binaryString = Array.from(unit8Array)
    .map((byte) => String.fromCharCode(byte))
    .join("");
  //文字列をBase64文字列に変換したものを返す
  return window.btoa(binaryString);
};

/**
 * ソースをダウンロードする。
 *
 * サンプルコード
 * ```
 *    //テキストをダウンロード
 *    downloadSrc(new Blob(['ファイル内容'], { type: 'text/plain' }), "file.txt");
 * ```
 * @param src URLまたはBlobオブジェクト
 * @param name ファイル名
 */
export const downloadSrc = (src: string | Blob | undefined, name?: string) => {
  if (src === undefined) {
    return;
  }
  const url = typeof src === "string" ? src : URL.createObjectURL(src);
  const a = document.createElement("a");
  document.body.appendChild(a);
  a.download = name ?? "";
  a.href = url;
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
};

/**
 * Base64文字列ソースをダウンロードする。
 *
 * サンプルコード
 * ```
 *    //テキストをダウンロード
 *    downloadBase64(Base64文字列ソース, "file.txt", 'text/plain');
 * ```
 * @param base64 Base64文字列ソース
 * @param name ファイル名
 * @param type MIMEコンテンツタイプ ※テキスト："text/plain" 画像："image/png" など
 */
export const downloadBase64 = (
  base64: string | undefined,
  name?: string,
  type?: string
) => {
  const blob = base64ToBlob(base64, type);
  downloadSrc(blob, name);
};
