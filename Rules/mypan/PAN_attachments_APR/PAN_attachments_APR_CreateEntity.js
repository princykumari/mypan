export default function CreateEntity(clientAPI) {
    return clientAPI.executeAction({
        'Name': '/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_CreateEntity.action',
        'Properties': {
            'OnSuccess': ''
        }
    }).then((result) => {
        let newEntity = JSON.parse(result.data);
        return clientAPI.executeAction({
            'Name': '/mypanmdk/Actions/mypan/PAN_attachments_APR/PAN_attachments_APR_UploadStream.action',
            'Properties': {
                'Target': {
                    'ReadLink': newEntity['@odata.readLink']
                }
            }
        });
    });
}