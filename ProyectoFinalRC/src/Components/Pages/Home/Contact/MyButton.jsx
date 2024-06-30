import { SnackbarProvider, enqueueSnackbar } from 'notistack'

const MyButton = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()
    return (
      <Button onClick={() => enqueueSnackbar('I love hooks')}>
        Show snackbar
      </Button>
    )
  }