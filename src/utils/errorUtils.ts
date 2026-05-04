export function getErrorMessage(err: unknown): string{
    if(typeof err === 'string'){
        return err
    }else {
        return JSON.stringify(err)
    }
}