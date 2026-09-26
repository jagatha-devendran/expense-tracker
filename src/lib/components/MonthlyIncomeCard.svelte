<script lang="ts">

    interface Props {
        icon_name?: string;
        title?: string;
        label?: string;
        description?: string;
        onValueChange?: (value: string) => void;
    }

    let {
        icon_name = "",
        title = "",
        label = "",
        description = "",
        onValueChange = () => {}
    }: Props = $props();

    function onChange(event: Event) {
        const target = event.target as HTMLInputElement;
        onValueChange(target.value);
    }
</script>

<div class="income-card">

    <div class="title-row">
        <div class="icon-container">
            <span class="material-symbols-outlined">{icon_name}</span>
        </div>

        <h3>{title}</h3>
    </div>

    <p class="label">{label}</p>

    <div class="input-container">
        <span class="currency">₹</span>

        <input
            type="number"
            onchange={onChange}
            placeholder="eg: 30,000"
        />
    </div>

    <p class="description">{description} </p>

</div>

<style>
    .income-card {
        background: #ffffff;
        padding: 20px 26px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
        flex: 1;
    }

    .title-row {
        display: flex;
        align-items: center;
        gap: 14px;
    }

    .icon-container {
        width: 48px;
        height: 48px;
        border-radius: 12px;
        background: #f1edff;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .material-symbols-outlined {
        color: #6349c0;
        font-size: 28px;
    }

    h3 {
        margin: 0;
        font-size: 18px;
    }

    .label {
        color: #7b8195;
        margin: 18px 0 10px;
        font-size: 14px;
    }

    .input-container {
        display: flex;
        align-items: center;
        height: 52px;
        border: 2px solid #e3e6ef;
        border-radius: 10px;
        overflow: hidden;
    }

    .currency {
        background: #f1edff;
        height: 100%;
        width: 50px;

        display: flex;
        align-items: center;
        justify-content: center;

        color: #6d7488;
        font-size: 20px;
    }

    input {
        border: none;
        outline: none;
        width: 100%;
        padding: 0 15px;
        font-size: 18px;
    }

    .description {
        color: #8a91a5;
        font-size: 13px;
        margin-top: 12px;
    }
</style>