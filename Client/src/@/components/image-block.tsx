import { CardContent, CardDescription } from "./ui/card";

interface Props {
  url: string;
  description: string;
}

const ImageBlock = ({ url, description }: Props) => {
  return (
    <CardContent className="mx-auto text-center col-span-1">
      <div className="overflow-hidden rounded-md  transform hover:scale-110 transition-transform hover:mb-2 shadow-lg">
        <img src={url} alt={description} />
      </div>
        <CardDescription>
          <h2>{description}</h2>
        </CardDescription>
    </CardContent>
  );
};

export default ImageBlock;
