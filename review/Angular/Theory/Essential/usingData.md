# Using Data in Angular Component

In this guide, we will learn how to use data in an Angular component without using any service. The data will be retrieved from a local `dummy_data` file.

## Step 1: Create Dummy Data

First, create a file named `dummy_data.ts` in your project directory and add the following dummy data:

```typescript
// src/app/dummy_data.ts
export const DUMMY_DATA = [
    { id: 1, name: 'Item 1', description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', description: 'Description for Item 2' },
    { id: 3, name: 'Item 3', description: 'Description for Item 3' }
];
```

## Step 2: Import Dummy Data in Component

Next, import the dummy data into your component and use it.

```typescript
// src/app/user/user.component.ts
import { Component, OnInit } from '@angular/core';
import { DUMMY_DATA } from '../dummy_data';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    data = DUMMY_DATA;

    ngOnInit(): void {
        // You can perform any additional initialization here
    }
}
```

## Step 3: Display Data in Template

Finally, display the data in your component's template.

```html
<!-- src/app/user/user.component.html -->
<div *ngFor="let item of data">
    <h3>{{ item.name }}</h3>
    <p>{{ item.description }}</p>
</div>
```

## Conclusion

By following these steps, you can easily use dummy data in your Angular component without the need for a service. This approach is useful for simple applications or for prototyping.

