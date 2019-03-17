import axios from 'axios';
import {constants} from ".";

export const handleUploadAction = (blob) => {
    return (dispatch) => {
        //here upload the image to Cloudinary
        let formData = new FormData();
        formData.append("file",blob);
        formData.append("upload_preset",constants.CLOUNDINARY_UPLOAD_PRESET);

        axios({
            url:constants.CLOUNDINARY_URL,
            method:"POST",
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            data:formData
        }).then(function(res){
            const user_imgUrl = res.data.secure_url;
            axios("/")
        })

    }
}