import vee from '../assets/Vee.jpg';
import '../header.css';

export default function () {
  return (
    <header id='home' className='polaroid'>
    <img src={vee} alt='vee'style={{width:'600px', height:'800px'}} className='responsive'/>
    </header>
  );
}
