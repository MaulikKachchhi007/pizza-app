import React from 'react';
import iziToast from 'izitoast';

export default function Success({ success }) {
    return (
        <div>
            {iziToast.success({
                title: 'Success',
                position: 'topRight',
                timeout: 5000,
                message: success
            })}
        </div>
    )
}
