import  "./inbox.scss";
import frootsPhoto from "../../assets/images/inbox/kisspng-salad.png"
import saladPhoto from "../../assets/images/inbox/Photo.png"

function Inbox() {
  return (
    <section className='inbox'>
      <div className='container'>
        <div className='inbox__content'>
          <h2 className='inbox__title'>Deliciousness to your inbox</h2>
          <p className='inbox__description'>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
          <input
            className='inbox__field'
            type='email'
            name=''
            id=''
            placeholder='Your email address...'
          />
          <button className='inbox__btn'>Subscribe</button>
          <img
            src={frootsPhoto}
            alt=''
            className={saladPhoto}
          />
          <img src='./assets/img/inbox/Photo.png' alt='' className='inbox__img' />
        </div>
      </div>
    </section>
  );
}

export default Inbox;
