import { Card } from "react-bootstrap";

interface IProps {
  image?: string;
  title?: string;
  price?: string;
  description?: string;
  addToCard?: string;
  handleClick?: any;
  defaultClass: any;
}
const BaseCard: React.FC<IProps> = ({
  image,
  title,
  price,
  description,
  addToCard,
  handleClick,
  defaultClass,
}) => {
  return (
    <>
      <Card className={` ${defaultClass}`} onClick={handleClick}>
        <Card.Body className="text-center">
          <Card.Img
            src={require(`../../assets/Home/${image}.svg`)}
            alt="item-1"
            className="p-2 card-img"
            height={200}
          />
          <Card.Title className="pb-4 my-3">{title}</Card.Title>
        </Card.Body>
      </Card>
      {/* <div className="bg-light rounded-4" onClick={handleClick}>
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
      </div> */}
    </>
  );
};

export default BaseCard;
