import Add from '@/components/Add';
import CustomizeProducts from '@/components/CustomizeProducts';
import ProductImages from '@/components/ProductImages';
import Wrapper from '@/components/Wrapper';

const SinglePage = () => {
  return (
    <Wrapper className="relative flex flex-col gap-16 lg:flex-row">
      {/* Image */}
      <div className="top-20 h-max w-full lg:sticky lg:w-1/2">
        <ProductImages />
      </div>
      {/* Text */}
      <div className="w-full flex-col gap-6 lg:w-1/2">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
          nostrum impedit quis modi aspernatur ad perspiciatis minima
          accusantium, numquam aut dolorum quod doloremque eveniet quos corrupti
          porro culpa odit fuga?
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="text-2xl font-medium">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="mb-4 font-medium">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            debitis reiciendis eveniet laboriosam distinctio, doloribus autem
            dolores, error quos asperiores perferendis sequi eius, voluptates
            tempore corrupti obcaecati similique neque necessitatibus.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="mb-4 font-medium">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            debitis reiciendis eveniet laboriosam distinctio, doloribus autem
            dolores, error quos asperiores perferendis sequi eius, voluptates
            tempore corrupti obcaecati similique neque necessitatibus.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="mb-4 font-medium">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            debitis reiciendis eveniet laboriosam distinctio, doloribus autem
            dolores, error quos asperiores perferendis sequi eius, voluptates
            tempore corrupti obcaecati similique neque necessitatibus.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default SinglePage;
