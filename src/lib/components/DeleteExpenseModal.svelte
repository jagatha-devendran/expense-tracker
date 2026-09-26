<script lang="ts">

    interface Props {
        expense: any;
        onCancel: () => void;
        onConfirm: () => void;
    }

    let {
        expense,
        onCancel,
        onConfirm
    }: Props = $props();

</script>


<div class="modal-overlay" onclick={onCancel}>

    <div
        class="delete-modal"
        onclick={(event) => event.stopPropagation()}
    >

        <div class="delete-icon">

            <span class="material-symbols-outlined">
                delete
            </span>

        </div>


        <button
            class="close-button"
            onclick={onCancel}
        >

            <span class="material-symbols-outlined">
                close
            </span>

        </button>


        <h2>Delete expense?</h2>


        <p>
            Are you sure you want to delete this expense?
            <br />
            This action cannot be undone.
        </p>


        <div class="modal-actions">

            <button
                class="cancel-button"
                onclick={onCancel}
            >
                Cancel
            </button>


            <button
                class="confirm-delete-button"
                onclick={onConfirm}
            >
                Delete
            </button>

        </div>

    </div>

</div>


<style>

    .modal-overlay {
        position: fixed;
        inset: 0;

        background: rgba(40, 35, 70, 0.18);

        display: flex;
        align-items: center;
        justify-content: center;

        z-index: 1000;
    }


    .delete-modal {
        position: relative;

        width: 390px;

        background: white;
        border-radius: 16px;

        padding: 28px;

        box-shadow: 0 15px 45px rgba(50, 40, 100, 0.18);
    }


    .delete-icon {
        width: 50px;
        height: 50px;

        border-radius: 13px;

        background: #fff0f2;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-bottom: 15px;
    }


    .delete-icon .material-symbols-outlined {
        color: #f05c6c;
        font-size: 27px;
    }


    .close-button {
        position: absolute;

        right: 20px;
        top: 20px;

        border: none;
        background: transparent;

        cursor: pointer;
    }


    .close-button .material-symbols-outlined {
        color: #8c96b5;
        font-size: 23px;
    }


    .delete-modal h2 {
        color: #17174a;
        font-size: 21px;

        margin: 0 0 12px;
    }


    .delete-modal p {
        color: #8a91ad;
        font-size: 14px;
        line-height: 1.7;

        margin: 0 0 25px;
    }


    .modal-actions {
        display: flex;
        justify-content: flex-end;
        gap: 14px;
    }


    .cancel-button,
    .confirm-delete-button {
        height: 45px;
        padding: 0 32px;

        border-radius: 9px;

        font-size: 14px;
        font-weight: 600;

        cursor: pointer;
    }


    .cancel-button {
        background: white;
        color: #6349c0;

        border: 1px solid #cfc6f5;
    }


    .confirm-delete-button {
        background: #f05c6c;
        color: white;

        border: none;
    }

</style>