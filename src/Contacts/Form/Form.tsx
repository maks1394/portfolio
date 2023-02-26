// @flow
import * as React from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { styled } from '@mui/material'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { StyledButton } from '../../common/SuperButton/StyledButton/StyledButton'

type Props = {}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

type IFormInput = {
  name: string
  phone: string
  comments: string
}

export const Form = (props: Props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      comments: '',
    },
  })

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <StyledTextField {...field} hiddenLabel placeholder="Name" />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <StyledTextField {...field} hiddenLabel placeholder="Phone" />
            )}
          />
          <Controller
            name="comments"
            control={control}
            render={({ field }) => (
              <StyledTextField
                {...field}
                hiddenLabel
                placeholder="Comments"
                multiline
                rows={4}
              />
            )}
          />
          {/* <StyledTextField
            hiddenLabel
            id="filled-hidden-label-small"
            placeholder="Small"
            variant="filled"
            size="small"
          />
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            placeholder="Normal"
            variant="filled"
          /> */}
          <StyledButton
            style={{ alignSelf: 'center', transform: 'translateX(-0.5rem)' }}
          >
            Send
          </StyledButton>
        </Stack>
      </form>
    </ThemeProvider>
  )
}

const StyledTextField = styled(TextField)`
  padding: 0;
  max-width: 100%;
  & .MuiInputBase-root {
    padding-left: 0;
    padding-top: 0;
  }
  & .MuiInputBase-input {
    padding: 0.75rem 1rem;
  }

  background-color: rgb(39, 39, 42);

  & fieldset {
    border-radius: 0 !important;
  }
  --color-omega-700: 63 63 70;
`
// MuiInputBase-input MuiFilledInput-input MuiInputBase-inputSizeSmall MuiInputBase-inputHiddenLabel css-v2i77y-MuiInputBase-input-MuiFilledInput-input
