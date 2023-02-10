import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const DashedContainer = styled.div`
    border: 2px dashed #C7CDD3;
    height: 200px;
    width: 553px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    background-color: #F2F5F8;
    cursor: pointer;
`

export const DefaultContainer = styled.div`
    height: 200px;
    width: 553px;
    border-radius: 8px;
    background-color: #F2F5F8;
    display: flex;
    justify-content: center;

    input[type='range'] {
	-webkit-appearance: none;
	height: 3px;
	background: #B9D1FF;
	border-radius: 5px;
    background-image: linear-gradient(#3F80FF, #3F80FF);
	background-repeat: no-repeat;
    }
    
    input[type='range']::-webkit-slider-thumb {
	-webkit-appearance: none;
	height: 20px;
	width: 20px;
	border-radius: 50%;
	background: #3F80FF;
	cursor: pointer;
	box-shadow: 0 0 2px 0 #555;
    }

    input[type='range']::-webkit-slider-runnable-track {
	-webkit-appearance: none;
	box-shadow: none;
	border: none;
	background: transparent;
    }

    input[type='range']::-webkit-slider-thumb {
	-webkit-appearance: none;
	height: 15px;
	width: 15px;
	border-radius: 50%;
	background: #3F80FF;
	cursor: pointer;
	box-shadow: 0 0 2px 0 #555;
    }

    input[type='range']::-webkit-slider-runnable-track {
	-webkit-appearance: none;
	box-shadow: none;
	border: none;
	background: transparent;
    }
`

export const CircleAvatarContainer = styled.div`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden
`

export const CircleEmptyAvatarContainer = styled.div`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #C3CBD5
`

export const SaveButton = styled.button`
    align-self: flex-end;
    width: 109px;
    height: 32px;
    background: #3D485F;
    border-radius: 16px;
    color: #FFFFFF;
`

export const Slider = styled.input`
    margin-bottom: 30px;
`
export const ContentBox = styled.div`
    display: flex; 
    align-items: center;
    width: 100%;
    justify-content: center;
    gap: 20px 
`

export const XCloseIcon = styled.div`
    cursor: pointer;
    height: 100%; 
    margin: 50px 0px 0px 20px
`

export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 270px; 
    align-items: center
`

export const LinkText = styled.a`
    color: #3D485F;
    font-weight: 400;
    font-family: Inter;
    font-size: 16px;
`

export const ErrorText = styled.p`
    color:#C64D32;
    font-weight: 400;
    font-family: Inter;
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 0;
`

export const InfoContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    min-width: 270px; 
    margin-left: 10px
`

export const SliderTitle = styled.p`
    color: #677489;
    font-weight: 400;
    font-family: Inter;
`

export const DropImageText = styled.p`
    color: #495567;
    font-weight: 400;
    font-family: Inter;
    font-size: 14px;
    margin: 0 
`

export const LogoText = styled.p`
    color: #495567;
    font-weight: 500;
    font-family: Inter;
`