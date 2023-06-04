import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-example-form-builder',
	templateUrl: './example-form-builder.component.html',
	styleUrls: ['./example-form-builder.component.css']
})

export class ExampleFormBuilderComponent {
	frmGeneral: FormGroup;

	listValue: any[] = [];

	get firstValueFb() { return this.frmGeneral.controls['firstValue']; }
	get secondValueFb() { return this.frmGeneral.controls['secondValue']; }

	constructor(
		private formBuilder: FormBuilder
	) {
		this.frmGeneral = this.formBuilder.group({
			firstValue: [null, [Validators.required, Validators.pattern(/^[0-9]{1,3}$/)]],
			secondValue: [null, [Validators.required, Validators.pattern(/^[0-9]{1,3}$/)]]
		});
	}

	addRow(): void {
		if(!this.frmGeneral.valid) {
			this.frmGeneral.markAllAsTouched();

			return;
		}

		this.listValue.push({
			fieldOne: this.firstValueFb.value,
			fieldTwo: this.secondValueFb.value
		});

		this.firstValueFb.setValue(null);
		this.secondValueFb.setValue(null);

		this.frmGeneral.reset();
	}
}