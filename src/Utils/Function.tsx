/**
 *　ユーザー権限の数値を受け取り権限の文字列（=名称）を返す
 * @param numAuth usr_tabが持つauthの数値
 * @returns ユーザー権限を表現する文字列
 */
 export const getAuthKbn = (numAuth: number | undefined): "SAMPLE" | "TENPO" | "SV" | "ADMIN" | "" => {
    // undefinedが返された時は空文字を返す
    if (numAuth === undefined) {
      return "";
    }
  
    if (numAuth === 0) {
      return "SAMPLE";
    } else if (numAuth <= 29) {
      return "TENPO";
    } else if (numAuth <= 50) {
      return "SV";
    } else {
      return "ADMIN";
    }
  };