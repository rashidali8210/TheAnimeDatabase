
AvatarPicker(currentAvatar ){
  const {user} = this.props
  const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
             username: user.username
        })
    };

  const uppy = Uppy({ autoProceed: true })
      .use(Dashboard, { trigger: '#select-files' })
      .use(GoogleDrive, { target: Dashboard, serverUrl: apiConstants.API_GENERAL_URL+'changeprofilepic' })
      .use(Instagram, { target: Dashboard, serverUrl: apiConstants.API_GENERAL_URL+'changeprofilepic' })
      .use(Webcam, { target: Dashboard })
      .use(Tus, { endpoint:  apiConstants.API_GENERAL_URL+'changeprofilepic?access-token='+user.username, requestOptions })
      .on('complete', (result) => {
        console.log('Upload result:', result)
      })

return (
  <div>
    <img src={currentAvatar} alt="Current Avatar" />
    <DragDrop
      uppy={uppy}
      locale={{
        strings: {
          // Text to show on the droppable area.
          // `%{browse}` is replaced with a link that opens the system file selection dialog.
          dropHereOr: 'Drop here or %{browse}',
          // Used as the label for the link that opens the system file selection dialog.
          browse: 'browse'
        }
