import { useState, useRef, ChangeEvent, SetStateAction } from 'react';
import {
    CircleAvatarContainer,
    CircleEmptyAvatarContainer,
    ContentBox,
    DashedContainer,
    DefaultContainer,
    DropImageText,
    ErrorText,
    InfoBox,
    InfoContainer,
    LinkText,
    LogoText,
    MainContainer,
    SaveButton,
    Slider,
    SliderTitle,
    XCloseIcon
} from './styles';

interface Props {
    size?: number;
    scale?: number;
    onChange: (value: string) => void;
}

const AvatarUpload = ({ size = 140, scale = 0.5, onChange }: Props) => {
    const [src, setSrc] = useState(null);
    const [step, setStep] = useState(0);
    const [imgScale, setImgScale] = useState<SetStateAction<any>>(scale);
    const imageRef = useRef(null);
    const fileInputRef = useRef(null);
    const MAX = 2;

    const getBackgroundSize = () => {
        return {
            backgroundSize: `${(imgScale as number * 100) / MAX}% 100%`,
        };
    };

    function checkImageFile(currentFile: Blob) {
        if (new RegExp("image/*").test(currentFile.type)) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                setStep(1)
                setImgScale(scale)
                setSrc(e.target.result)
            };
            reader.readAsDataURL(currentFile);
        } else {
            setStep(3)
        }
    }

    const handleClickUploadImage = () => {
        fileInputRef.current.click()
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const file = e.target.files[0];
        if (!file) return;
        checkImageFile(file);
        onChange(file as any);
    };

    const handleCancel = () => {
        setSrc(null);
        setStep(0)
        setImgScale(scale)
    };

    const handleScale = (e: ChangeEvent<HTMLInputElement>): void => {
        setImgScale(e.target.value);
    };

    const handleSave = () => {
        setStep(2)
        setSrc(imageRef.current.src)
        onChange(imageRef.current.src)
    };

    const handleDrop = (e: any) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (!file) return;
        checkImageFile(file);
        onChange(file)
    };

    const avatarCircleStyles = {
        width: size,
        height: size,
    };

    const imgStyles = {
        transform: `scale(${imgScale})`,
    };

    return (
        <MainContainer>
            {step === 0 && (
                <DashedContainer
                    data-testid={'drop-area'}
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    onClick={handleClickUploadImage}
                >
                    <input
                        data-testid={'file-input'}
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/png, image/gif, image/jpeg"
                        style={{ display: 'none' }}
                    />
                    <div style={{ display: 'flex', gap: 10 }}>
                        <img src='/assets/vector.svg' />
                        <LogoText>
                            Organization Logo
                        </LogoText>
                    </div>
                    <DropImageText>
                        Drop the image here or click to browse.
                    </DropImageText>
                </DashedContainer>
            )}

            {step === 1 && (
                <DefaultContainer>
                    <ContentBox>
                        <CircleAvatarContainer style={avatarCircleStyles}>
                            <div style={imgStyles}>
                                <img ref={imageRef} src={src} />
                            </div>
                        </CircleAvatarContainer>
                        <InfoContainer>
                            <SliderTitle >
                                Crop
                            </SliderTitle>
                            <Slider
                                type="range"
                                min={0.1}
                                max={MAX}
                                step={0.1}
                                value={imgScale}
                                onChange={handleScale}
                                style={getBackgroundSize()}
                            />
                            <SaveButton onClick={handleSave}>
                                Save
                            </SaveButton>
                        </InfoContainer>
                        <XCloseIcon onClick={handleCancel}>
                            <img src="/assets/x.svg" />
                        </XCloseIcon>
                    </ContentBox>
                </DefaultContainer>
            )}

            {step === 2 && (
                <DashedContainer
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    onClick={handleClickUploadImage}
                >
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/png, image/gif, image/jpeg"
                        style={{ display: 'none' }}
                    />
                    <ContentBox>
                        <CircleAvatarContainer style={avatarCircleStyles}>
                            <div style={imgStyles}>
                                <img ref={imageRef} src={src} />
                            </div>
                        </CircleAvatarContainer>
                        <InfoBox>
                            <div style={{ display: 'flex', gap: 15 }}>
                                <img src='/assets/vector.svg' />
                                <LogoText>
                                    Organization Logo
                                </LogoText>
                            </div>
                            <DropImageText>
                                Drop the image here or click to browse.
                            </DropImageText>
                        </InfoBox>
                    </ContentBox>
                </DashedContainer>
            )}

            {step === 3 && (
                <DefaultContainer>
                    <ContentBox>
                        <CircleEmptyAvatarContainer style={avatarCircleStyles}>
                            <div style={{ background: '#C3CBD5' }}>
                                <img src='/assets/exclamation.svg' />
                            </div>
                        </CircleEmptyAvatarContainer>
                        <InfoContainer>
                            <ErrorText>
                                Sorry, the upload failed.
                            </ErrorText>
                            <LinkText href='#' onClick={handleCancel}>
                                Try again
                            </LinkText>
                        </InfoContainer>
                        <XCloseIcon onClick={handleCancel}>
                            <img src="/assets/x.svg" />
                        </XCloseIcon>
                    </ContentBox>
                </DefaultContainer>
            )}
        </MainContainer >
    );
};

export default AvatarUpload;