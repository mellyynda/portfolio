import { useState } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
padding: 0 5%;
margin-bottom: 25px;

iframe {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
}

h2, p  {
    margin: 0 auto 20px;
    max-width: 600px;
}
div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
img {
    width: 100%;
    max-width: 600px;
    margin-bottom: 15px;
    margin-right: 15px;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
    @media screen and (min-width: 668px) {
        height: 380px;
    }
}
`
const Toggle = styled.span`
    display: block;
    width: 110px;
    margin: 0 auto;
    cursor: pointer;
`

const Card = ({pics, link, title, description, embedd}) => {

    const [showMore, setShowMore] = useState(false);

    //console.log(pics[0].includes('proto'));

    let height = 450;

    if(window.innerWidth > 668) {
        height = 380;
    }

    const mobImgStyle = {
        maxWidth: '300px',
        height: height +'px',
        width: 'auto'
    }

    return(<Wrapper>
        <h2><a href={link} target='_blank'>{title}</a></h2>
        <p>{description}</p>
        {embedd ?
        embedd :
        <>
        <a href={link} target='_blank'>
            <div>
                {!showMore ? 
                <img src={pics[0]} style={pics[0].includes('proto') ? mobImgStyle : null} alt={title}></img> : 
                pics.map(image => {
                    return(<img src={image} style={image.includes('mobile') ? mobImgStyle : null} alt={title}></img>)
                })
                }  
            </div>  
        </a> 
        <Toggle onClick={() => {
            setShowMore(!showMore);
        }}>
            {pics.length < 2 ? 
            null:
            showMore ? 
                'show less △': 
                'show more ▽'}
        </Toggle> 
        </>
        }  
    </Wrapper>
    )
}

export default Card;
//image.includes('mobile') ? 