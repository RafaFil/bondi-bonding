import { Component, OnInit, EventEmitter, Output, Input, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatChip } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';

import { TripFilters, GENDER_OPTIONS, LIKES_OPTIONS } from 'src/app/modules/core/interfaces';


@Component({
  selector: 'app-trip-filters-form',
  templateUrl: './trip-filters-form.component.html',
  styleUrls: ['./trip-filters-form.component.sass']
})
export class TripFiltersFormComponent implements OnInit, AfterViewInit {

  genderOptions = GENDER_OPTIONS;
  likesOptions = LIKES_OPTIONS;
  chipLikesArr: MatChip[] = [];
  allChips: MatChip[] = [];

  filterForm = this.formBuilder.group({
    minAge: [ '', [ Validators.pattern('^[0-9]{2,3}$'), Validators.min(18)] ],
    maxAge: [ '', [ Validators.pattern('^[0-9]{2,3}$') ] ],
    gender: new FormControl<"Male" | "Female" | "Non-binary" | "Other" | null | undefined>(null),
    likes : this.formBuilder.array<string>([])
  });

  @Input() defaultFilters?: TripFilters;

  @Output() tripFiltersSubmit = new EventEmitter<TripFilters>();

  @ViewChildren(MatChip)
  chips?: QueryList<MatChip>;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    if (this.defaultFilters) {
      this.setDefaultFilters();
    }
  }

  checkMaxAge(): void {
    const minAge = +this.filterForm.controls.minAge.value!;
    const maxAge = +this.filterForm.controls.maxAge.value!;

    if (maxAge && maxAge < minAge) {
      this.filterForm.controls.maxAge.setErrors({ maxAgeLessThanMin: true });
    } else {
      this.filterForm.controls.maxAge.setErrors(null);
    }
  }

  handleTripFiltersSubmit() {
    if (!this.filterForm.valid)   return;

    const formValues = this.filterForm.value;
    const filters: TripFilters = {
      gender: formValues.gender,
      ageRange: {
        min: formValues.minAge ? +formValues.minAge : undefined,
        max: formValues.maxAge ? +formValues.maxAge : undefined
      },
      likes: formValues.likes! as ("Music" | "Movies" | "Sports" | "Arts" | "Food" | "Coffee" | "Games" | "TV" | null)[] | undefined
    };

    this.tripFiltersSubmit.emit( filters );
  }

  selectChip(chip: MatChip) {
    if (chip.selected) {
      chip.deselect();
      this.removeLikeFromLike(chip);
      return;
    }

    chip.toggleSelected();
    const popedLike = this.addLikeToLikes(chip);

    if (popedLike) {
      popedLike.deselect();
    }
  }

  addLikeToLikes(newLike : MatChip) {
    const value = this.filterForm.controls.likes.value;
    value.unshift( newLike.value )
    this.chipLikesArr.unshift(newLike);
    if (value.length > 3) {
      value.pop();
      return this.chipLikesArr.pop()
    }
    return;
  }

  removeLikeFromLike(likeToRemove : MatChip) {
    const value = this.filterForm.controls.likes.value;
    value.forEach(like => {
      if (like === likeToRemove.value) {
        value.splice(value.indexOf(like), 1);
      }
    })
    return this.chipLikesArr.splice(
      this.chipLikesArr.indexOf(likeToRemove), 1
    )
  }

  setDefaultFilters() {
    const controls = this.filterForm.controls;

    if (this.defaultFilters?.ageRange) {
      const ageRange = this.defaultFilters.ageRange;

      controls.minAge.setValue(`${ageRange.min ? ageRange.min : ''}`);
      controls.maxAge.setValue(`${ageRange.max ? ageRange.max : ''}`);
    }

    if (this.defaultFilters?.gender) {
      controls.gender.setValue(`${this.defaultFilters!.gender}`);
    }

    if (this.defaultFilters?.likes && this.defaultFilters?.likes.length <= 3) {
      if (!this.chips) {
        return;
      }

      for (const like of this.defaultFilters.likes) {
        for (const chip of this.chips) {
          if (chip.value === like) {
            this.selectChip(chip);
            break;
          }
        }
      }
    }
  }

}
