import React, { useEffect } from 'react';
import pic from '../Media/profile_pic.jpg'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap';
import * as Helper from './Helpers'; 
import '../CSS/_aboutme.css';

export function _AboutMe({id, isMobile, scrollbar, backgroundColor, setBackgroundColor, curPanel, setFontColor}) {
	useEffect(() => {
    if (curPanel === id) {
			setBackgroundColor(backgroundColor);
			setFontColor("white");
    }
	},[curPanel])

	const rowStyles = {margin: '0px'};
	return (
		<Container id={id} fluid style={{padding: isMobile ?  '10px 10px 60px 10px' : '10px 10% 60px 10%'}} className="page_section">
			<Helper.SectionHeader title="ABOUT ME" />
			<Row style={rowStyles} xs={1} sm={1} md={1} lg={1} xl={2}> 
				<Col style={{alignSelf: 'center'}}>
					<Image src={pic} rounded style={{maxWidth: '100%'}}/>
				</Col>
				<Col style={{padding: '15px'}}>
					<Row style={rowStyles}><p>Born Canadian and proudly Asian — my name is Charmaine and I am a Biomedical Engineering student pursuing an option in artificial intelligence at the University of Waterloo.</p></Row>
					<Row style={rowStyles}><p>Here's a few things about me that I would like to share with you! </p></Row>
					<Row style={rowStyles}>
						<ul>
							<li>I love to create. Whether it's building a prototype, putting together a visual on Photoshop, or emptying my ideas out into a sketch, I challenge myself to find ways to explore my creative ability.</li>
							<li>My favourite colour is maroon.</li>
							<li>I have a lot of interests. Perhaps too many. Software, robotics, visual art, dance, music, gymnastics, bouldering, yoga, tricking, food (as in eating...sometimes making it too), photography, hiking, canoeing, backpacking, reading — you name it.</li> 
							<li>I am notorius for overthinking. At least I'm aware of it...but then I overthink about how much I overthink.</li>
							<li>My goal is to ultimately drive change through innovation and creativity.</li>
							<li>Popcorn chicken and bubble tea. Must I say more?</li>
						</ul>
					</Row>
				</Col>
			</Row>
		</Container>
	)
}