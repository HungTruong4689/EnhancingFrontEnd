# Handling States in Angular

Managing state in Angular applications can be achieved through various methods. Here are some common approaches:

## 1. Component State
Component state is managed within the component itself. This is suitable for small applications or isolated components.

```typescript
export class MyComponent {
    public myState: string = 'initial state';

    updateState(newState: string) {
        this.myState = newState;
    }
}
```

## 2. Service State
Using services to manage state allows sharing state across multiple components.

```typescript
@Injectable({
    providedIn: 'root',
})
export class StateService {
    private state: string = 'initial state';

    getState(): string {
        return this.state;
    }

    setState(newState: string) {
        this.state = newState;
    }
}
```

## 3. NgRx
NgRx is a powerful state management library for Angular, inspired by Redux. It provides a single source of truth for the application state.

### Installation
```bash
ng add @ngrx/store
ng add @ngrx/effects
```

### Example
Define actions, reducers, and effects to manage state.

```typescript
// actions.ts
export const loadItems = createAction('[Items] Load Items');

// reducer.ts
export const initialState = { items: [] };

const _itemsReducer = createReducer(
    initialState,
    on(loadItems, state => ({ ...state, loading: true }))
);

export function itemsReducer(state, action) {
    return _itemsReducer(state, action);
}

// effects.ts
@Injectable()
export class ItemsEffects {
    loadItems$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadItems),
            mergeMap(() => this.itemsService.getAll()
                .pipe(
                    map(items => ({ type: '[Items] Load Items Success', items })),
                    catchError(() => of({ type: '[Items] Load Items Failure' }))
                ))
        )
    );

    constructor(
        private actions$: Actions,
        private itemsService: ItemsService
    ) {}
}
```

## Conclusion
Choosing the right state management approach depends on the complexity and requirements of your application. For simple cases, component or service state might be sufficient. For more complex scenarios, consider using NgRx.
