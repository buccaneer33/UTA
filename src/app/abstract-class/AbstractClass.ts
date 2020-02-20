import { cloneDeep } from 'lodash';

export abstract class AbstractClass {

    public validationRules: Array<String> = [];

    public isValueChanged: boolean = false;

    protected metadata;

    attributes = [
        'name',
        'type',
        'value',
        'uneditableValue',
        'code',
        'outputType',
        'subCode',
        'subSubCode',
        'required',
        'visible',
        'readonly',
        'multiple',
        'dataSource',
        'request',
        'approvers',
        'confirmDocs',
        'blockParameterInfo',
        'blocked',
        'errorMessages',
        'isSokValueChanged',
    ];

    public name: string = '';
    public type: string = '';
    public value: any = null;
    public code: string = '';
    public outputType: string = '';
    public subCode: string = '';
    public subSubCode: string = '';
    public required: boolean = false;
    public visible: boolean = true;
    public readonly: boolean = false;
    public multiple: boolean = false;
    public dataSource = null;
    public request: string = '';
    public approvers: [] = [];
    public confirmDocs: [] = [];
    public blockParameterInfo = null;
    public blocked: boolean = false;
    public errorMessages: string[] = [];
    public isSokValueChanged: boolean = false;


    public getIdentifier() {
        return 'field_' + this.code + '_' + this.subCode + '_' + this.subSubCode;
    }

    protected setAttributes( metadata ): void {
        if (this.attributes && this.attributes.length) {
            this.attributes.forEach( attr => {
                if ( metadata.hasOwnProperty(attr) &&
                this.hasOwnProperty( attr ) &&
                metadata[attr] ) {
                    this[attr] = metadata[attr];
                }
            });
        }
        if ( metadata && metadata.validators && metadata.validators.length ) {
            this.validationRules = cloneDeep( metadata.validators );
        }
    }

    public getMetadata() {
        return cloneDeep(this.metadata);
    }

    public getValidationRules(): Array<String> {
        return cloneDeep( this.validationRules );
    }

    public getRequestValue(): any {
        return {
            editedValue: 'value',
            sokValue: 'sokValue',
            newSokValue: 'newSokValue'
        };
    }

    public isSokNewValueAvailableToUpdate(): boolean {
        return this.isSokValueChanged;
    }

    public isConfirmDocsNeeded() {
        return ( this.isValueChanged && this.confirmDocs.length > 0 );
    }

    public hasServerErrors(): string[] | boolean {
        return ( this.errorMessages && this.errorMessages.length ?
            this.errorMessages :
            false
        );
    }

    public updateErrorMessages( errors: string[] ) {
        this.errorMessages = cloneDeep( errors );
    }

    public getValue() {
        return this.value;
    }

}
