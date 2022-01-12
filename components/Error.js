import { useNavigate } from "react-router-dom";

export const Error = () => {
  let navigate = useNavigate();
  const pageTransition = () => {
    navigate("/");
  };

  setTimeout(pageTransition, 3000);

  return (
    <div class="errorWrap">
      <h1>このページは存在しません。3秒後に最初の画面に戻ります。</h1>
    </div>
  );
};
