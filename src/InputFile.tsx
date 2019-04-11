import * as React from 'react' // eslint-disable-line
import { Button, ButtonProps, Label } from 'semantic-ui-react' // eslint-disable-line

export const InputFile: React.FC<{
  button?: ButtonProps
  input: React.InputHTMLAttributes<any> & { id: string }
}> = ({ button = {}, input: inputProps }) => {
  let hiddenInput: HTMLInputElement | null = null
  return (
    <React.Fragment>
      <Button
        icon='upload'
        htmlFor={inputProps.id}
        label={
          <Label
            as='label'
            style={{ cursor: 'pointer' }}
            basic
            children='Select file'
          />
        }
        onClick={() => hiddenInput!.click()}
        labelPosition='right'
        {...button}
      />
      <input
        hidden
        ref={el => {
          hiddenInput = el!
        }}
        type='file'
        {...inputProps}
      />
    </React.Fragment>
  )
}
