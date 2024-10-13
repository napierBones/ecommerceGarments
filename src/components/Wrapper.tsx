import clsx from 'clsx';

const Wrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={clsx('px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64', className)}
    >
      {children}
    </div>
  );
};

export default Wrapper;
