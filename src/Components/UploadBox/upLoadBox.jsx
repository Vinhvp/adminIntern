// import React,{useState} from 'react';
// import * as styled from './upLoadBox.styled';

// const UploadBox = (props) => {
//     const [image, setImage] = useState('');
//     const [ url, setUrl ] = useState("");
//     const loadFile = (e)=>{
//         const data = new FormData()
//         data.append("file", image)
//         data.append("upload_preset", "vinhvp")
//         data.append("cloud_name","HCM")
//         fetch("https://api.cloudinary.com/v1_1/HCM/image/upload",{
//         method:"post",
//         body: data
//         })
//         .then(resp => resp.json())
//         .then(data => {
//             setUrl(data.url)
//         })
//         .catch(err => console.log(err))
//     }
//     console.log(url);
//     return ( 
//         <styled.uploadBox>
//             <input class='custom-file-input' accept="image/*" type="file" onChange= {(e)=> setImage(e.target.files[0])}></input>
//             <button class='upload' onClick={loadFile}>Upload</button>
//             <img src={url} />
//         </styled.uploadBox>
//      );
// }
 
// export default UploadBox;


import React,{useState} from 'react';
import * as styled from './upLoadBox.styled';
const UploadBox = (props) => {
    const [url, setUrl ] = useState("");
    const loadFile = (e)=>{
        const image = e.target.files[0]
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "vinhvp")
        data.append("cloud_name","HCM")
        fetch("https://api.cloudinary.com/v1_1/internwebsite7777/image/upload",{
            method:"post",
            body: data
        })
        .then(resp => resp.json())
        .then(data => {
            props.setImg(data.url);
            setUrl(data.url)
        })
        .catch(err => console.log(err))
    }
    return ( 
        <styled.uploadBox>
            <input type="file" class='custom-file-input' accept="image/*" onChange={loadFile}></input>
            <p class='upload'>Upload Photo</p>
            <img src={Boolean(url) ? url : null } />
        </styled.uploadBox>
     );
}
 
export default UploadBox;