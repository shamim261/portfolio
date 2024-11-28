interface Props {
  children: string;
  classNames?: string;
}

const Heading = ({ children, classNames }: Props) => {
  return (
    <div className="py-10 flex items-center gap-4">
      <h2 className={`${classNames} font-bold`}>{children}</h2>
      <hr className="hidden sm:block w-72 mt-5 border-navy-100" />
    </div>
  );
};

export default Heading;
