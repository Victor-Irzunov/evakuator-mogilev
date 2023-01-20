import { Carousel, Image } from 'antd'
import img1 from '../../../images/portfolio/1.jpg'
import img2 from '../../../images/portfolio/2.jpg'
import img3 from '../../../images/portfolio/3.jpg'
import img4 from '../../../images/portfolio/4.jpg'
import img5 from '../../../images/portfolio/5.jpg'
import img6 from '../../../images/portfolio/6.jpg'
import img7 from '../../../images/portfolio/7.jpg'
import img8 from '../../../images/portfolio/8.jpg'
import img9 from '../../../images/portfolio/9.jpg'
import img10 from '../../../images/portfolio/10.jpg'
import img11 from '../../../images/portfolio/11.jpg'
import img12 from '../../../images/portfolio/12.jpg'


const contentStyle = {
	// height: '200px',
	width: '100%'
};
const SliderComp = () => (
	<Carousel autoplay dots={false}>
		<div>
			<Image src={img1} style={contentStyle} />
		</div>
		<div>
			<Image src={img2} style={contentStyle} />
		</div>
		<div>
			<Image src={img3} style={contentStyle} />
		</div>
		<div>
			<Image src={img4} style={contentStyle} />
		</div>
		<div>
			<Image src={img5} style={contentStyle} />
		</div>
		<div>
			<Image src={img6} style={contentStyle} />
		</div>
		<div>
			<Image src={img7} style={contentStyle} />
		</div>
		<div>
			<Image src={img8} style={contentStyle} />
		</div>
		<div>
			<Image src={img9} style={contentStyle} />
		</div>
		<div>
			<Image src={img10} style={contentStyle} />
		</div>
		<div>
			<Image src={img11} style={contentStyle} />
		</div>
		<div>
			<Image src={img12} style={contentStyle} />
		</div>
	</Carousel>
);
export default SliderComp