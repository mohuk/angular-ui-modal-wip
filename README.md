# angular-ui-modal-wip

Work in progress module for Angular UI Bootstrap Modal

The Idea is to save the context/data in the modal forms if the user decides to dismiss the modal by clicking the backdrop. If the use explicitly cancels or closes the modal, the context/data should be refreshed.

Approach:

Decorating the *$modal* and *$modalStack* services from Angular UI Bootstrap
