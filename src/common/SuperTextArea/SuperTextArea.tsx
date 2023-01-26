import React, {
    ChangeEvent,
    KeyboardEvent,
    ReactNode,
} from 'react'
import s from './SuperTextArea.module.css'

// тип пропсов обычного инпута
type DefaultTextAreaPropsType =  React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута, кроме type
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperTextAreaPropsType = Omit<DefaultTextAreaPropsType, 'type'> & {
    // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: ReactNode
    spanClassName?: string
}

const SuperTextArea: React.FC<SuperTextAreaPropsType> = (
    {
        onChange,
        onChangeText,
        onKeyPress,
        onEnter,
        error,
        className,
        spanClassName,
        id,

        ...restProps // все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e) // если есть пропс onChange, то передать ему е (поскольку onChange не обязателен)

        onChangeText?.(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        onKeyPress?.(e)

        onEnter && // если есть пропс onEnter
        e.key === 'Enter' && // и если нажата кнопка Enter
        onEnter() // то вызвать его
    }

    const finalSpanClassName = s.error
        + (spanClassName ? ' ' + spanClassName : '')
    const finalTextareaClassName = s.textarea
        + (error ? ' ' + s.errorTextarea : ' ' + s.superTextarea)
        + (className ? ' ' + className : '') // задача на смешивание классов

    return (
        <div className={s.textareaWrapper}>
            <textarea id={id}
                      onChange={onChangeCallback}
                      onKeyPress={onKeyPressCallback}
                      className={finalTextareaClassName}
                      {...restProps} ></textarea>
            {/*<input*/}
            {/*    id={id}*/}
            {/*    type={'text'}*/}
            {/*    onChange={onChangeCallback}*/}
            {/*    onKeyPress={onKeyPressCallback}*/}
            {/*    className={finalTextareaClassName}*/}
            {/*    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)*/}
            {/*/>*/}
            <span
                id={id ? id + '-span' : undefined}
                className={finalSpanClassName}
            >
                {error}
            </span>
        </div>
    )
}

export default SuperTextArea
