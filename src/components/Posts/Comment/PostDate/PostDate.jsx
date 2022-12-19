const PostDate = ({ upDate }) => {
  const dateFormat = (upDate) => {
    const dateTotal = upDate.split("T")[0];
    const year = dateTotal.split("-")[0];
    const month = dateTotal.split("-")[1];
    const day = dateTotal.split("-")[2];
    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <>
      <p className="post-date">{dateFormat(upDate)}</p>
    </>
  );
};
export default PostDate;
