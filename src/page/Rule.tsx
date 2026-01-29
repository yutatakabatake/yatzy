import './Rule.css'

function Rule() {
    return (
        <div className='rule-container'>
            <h1 className='rule-title'>Yaztyのルール</h1>

            <section className='rule-section'>
                <h2>ゲーム概要</h2>
                <p>
                    Yaztyは5個のサイコロを使って、様々な組み合わせを作ってスコアを競うゲームです。
                    3回までサイコロを振り直すことができます。
                </p>
            </section>

            <section className='rule-section'>
                <h2>基本ルール</h2>
                <ul>
                    <li>サイコロを振って、13種類の役でスコアを記録します</li>
                    <li>各役は1回だけ使用できます</li>
                    <li>すべての役を埋めたときの合計スコアを競います</li>
                </ul>
            </section>

            <section className='rule-section'>
                <h2>サイコロの振り方</h2>
                <ol>
                    <li>5個のサイコロをすべて振ります</li>
                    <li>残しておきたいサイコロを「ホールド」します</li>
                    <li>選ばれなかったサイコロを再度振ります</li>
                    <li>この操作は最大3回まで繰り返せます</li>
                </ol>
            </section>

            <section className='rule-section'>
                <h2>役とスコア</h2>

                <div className='category-group'>
                    <h3>上段（数字による合計）</h3>
                    <ul>
                        <li><strong>1〜6</strong>: 選んだ数字の合計スコア</li>
                        <li>上段の合計スコアが63以上ならボーナススコア30点</li>
                    </ul>
                </div>

                <div className='category-group'>
                    <h3>下段（組み合わせ）</h3>
                    <ul>
                        <li><strong>スリーオブアカインド</strong>: 同じ数字が3個以上 → 全サイコロの合計</li>
                        <li><strong>フォーオブアカインド</strong>: 同じ数字が4個以上 → 全サイコロの合計</li>
                        <li><strong>フルハウス</strong>: 同じ数字が3個と2個 → 25点</li>
                        <li><strong>スモールストレート</strong>: 4連続（例：1,2,3,4）→ 30点</li>
                        <li><strong>ラージストレート</strong>: 5連続（1,2,3,4,5または2,3,4,5,6）→ 40点</li>
                        <li><strong>チャンス</strong>: どんな組み合わせでもOK → 全サイコロの合計</li>
                        <li><strong>Yazty</strong>: 同じ数字が5個 → 50点</li>
                    </ul>
                </div>
            </section>

            <section className='rule-section'>
                <h2>ゲーム終了と勝敗</h2>
                <p>
                    13役すべてにスコアを記録したときにゲーム終了です。
                    合計スコアが高いプレイヤーの勝ちです。
                </p>
            </section>

            <section className='rule-section'>
                <h2>戦略のコツ</h2>
                <ul>
                    <li>ラージストレートやYaztyなど高いスコアを狙う？ボーナススコアを狙う？</li>
                    <li>1回の振りで複数の役に使える組み合わせを作ろう!</li>
                    <li>運を味方につけよう!</li>
                </ul>
            </section>
        </div>
    )
}

export default Rule