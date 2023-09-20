interface IProps {
  image?: string;
  title?: string;
  price?: string;
  description?: string;
  addToCard?: string;
  handleClick?: any;
}
const Card: React.FC<IProps> = ({
  image,
  title,
  price,
  description,
  addToCard,
  handleClick,
}) => {
  return (
    <>
      <div className="bg-light rounded-4" onClick={() => {}}>
        <div className="">
          <div className="text-center">
            <img
              src={require(`../../assets/Home/${image}.svg`)}
              alt="item-1"
              className="p-2 card-img"
              height={200}
            />
            <h4 className="pb-4 my-3">{title}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
