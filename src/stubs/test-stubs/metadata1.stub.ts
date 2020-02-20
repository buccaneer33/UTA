export const metadataStub1 = {
    id: 123,
    name: 'Телефоны',
    type: 'select',
    value: {
        sokValue: '(391)256-46-97'
     },
    code: 'MD7',
    outputType: 'Value',
    subCode: '0',
    required: true,
    visible: true,
    readonly: false,
    blockType: 'Cell',
    blocked: false,
    errorValidationMessages: ['validError1', 'validError2'],
    errorMessages: ['error1', 'error2'],

    isSokNewValueAvailableToUpdate() {
        return true;
    },
    markAsUntouched() { },
    hasServerErrors() { },
};
