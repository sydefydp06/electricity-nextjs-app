import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Composition = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <p>Your energy composition</p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
      recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
      voluptatibus distinctio recusandae autem esse explicabo molestias officia
      placeat, accusamus aut saepe.
    </p>
  </Main>
);

export default Composition;
