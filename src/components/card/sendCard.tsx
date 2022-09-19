export const SendCard = () => {
  return (
    <div>
      {/* valueの値 c:/ は明らかにクライアント側のディスク ファイル システム パスと同じではない */}
      <form name="foo" method="post">
        <input type="file" value="c:/passwords.txt" />
      </form>
      <script>document.foo.submit();</script>
    </div>
  );
};
