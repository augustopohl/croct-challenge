
import { render, fireEvent, act } from '@testing-library/react';
import AvatarUpload from '.';

describe('AvatarUploader', () => {
    test('should allow uploading an image by dragging it into the dashed area', async () => {
        const mockFile = new File([new ArrayBuffer(10)], 'test.jpg', { type: 'image/jpeg' });
        const onChange = jest.fn();

        const { getByTestId } = render(<AvatarUpload onChange={onChange} />);

        const dropArea = getByTestId('drop-area');

        await act(async () => {
            fireEvent.dragOver(dropArea);
            fireEvent.drop(dropArea, { dataTransfer: { files: [mockFile] } });
        });

        expect(onChange).toHaveBeenCalledWith(mockFile);
    });

    test('should allow uploading an image by clicking on the dashed area', async () => {
        const mockFile = new File([new ArrayBuffer(10)], 'test.jpg', { type: 'image/jpeg' });
        const onChange = jest.fn();

        const { getByTestId } = render(<AvatarUpload onChange={onChange} />);

        const input = getByTestId('file-input');

        await act(async () => {
            fireEvent.change(input, { target: { files: [mockFile] } });
        });

        expect(onChange).toHaveBeenCalledWith(mockFile);
    });
});
