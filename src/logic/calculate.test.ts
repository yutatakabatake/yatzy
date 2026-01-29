import { describe, test, expect } from "vitest";
import { calcScores } from './calculate.ts'

describe('score of [1,2,3,4,5]', () => {
    const faces = [0, 1, 2, 3, 4];
    const scores = calcScores(faces);
    test('Small Straight', () => {

        // スコアボードから各カテゴリのスコアを取得
        const smallStraight = scores.find(s => s.key === 'SmallStraight')?.score;
        const largeStraight = scores.find(s => s.key === 'LargeStraight')?.score;

        expect(smallStraight).toBe(30); // Small Straight: 4連続以上で30点
        expect(largeStraight).toBe(40); // Large Straight: 5連続でなければ0点
    });

    test('Individual Numbers', () => {
        expect(scores.find(s => s.key === 'Ones')?.score).toBe(1);
        expect(scores.find(s => s.key === 'Twos')?.score).toBe(2);
        expect(scores.find(s => s.key === 'Threes')?.score).toBe(3);
        expect(scores.find(s => s.key === 'Fours')?.score).toBe(4);
        expect(scores.find(s => s.key === 'Fives')?.score).toBe(5);
        expect(scores.find(s => s.key === 'Sixes')?.score).toBe(0);
    });

    test('Chance', () => {
        const chance = scores.find(s => s.key === 'Chance')?.score;
        expect(chance).toBe(15);
    });

    test('Yatzy and other patterns', () => {
        expect(scores.find(s => s.key === 'Yatzy')?.score).toBe(0);      // 5つ揃っていない
        expect(scores.find(s => s.key === 'Three')?.score).toBe(0);      // 3連続ペア無し
        expect(scores.find(s => s.key === 'Four')?.score).toBe(0);       // 4連続ペア無し
        expect(scores.find(s => s.key === 'HullHouse')?.score).toBe(0);  // ペア無し
    });
});

describe('score of [1,2,3,4,4]', () => {
    const faces = [0, 1, 2, 3, 3];
    const scores = calcScores(faces);
    test('Small Straight', () => {

        // スコアボードから各カテゴリのスコアを取得
        const smallStraight = scores.find(s => s.key === 'SmallStraight')?.score;
        const largeStraight = scores.find(s => s.key === 'LargeStraight')?.score;

        expect(smallStraight).toBe(30); // Small Straight: 4連続以上で30点
        expect(largeStraight).toBe(0);
    });

    test('Individual Numbers', () => {
        expect(scores.find(s => s.key === 'Ones')?.score).toBe(1);
        expect(scores.find(s => s.key === 'Twos')?.score).toBe(2);
        expect(scores.find(s => s.key === 'Threes')?.score).toBe(3);
        expect(scores.find(s => s.key === 'Fours')?.score).toBe(8);
        expect(scores.find(s => s.key === 'Fives')?.score).toBe(0);
        expect(scores.find(s => s.key === 'Sixes')?.score).toBe(0);
    });

    test('Chance', () => {
        const chance = scores.find(s => s.key === 'Chance')?.score;
        expect(chance).toBe(14);
    });

    test('Yatzy and other patterns', () => {
        expect(scores.find(s => s.key === 'Yatzy')?.score).toBe(0);      // 5つ揃っていない
        expect(scores.find(s => s.key === 'Three')?.score).toBe(0);      // 3連続ペア無し
        expect(scores.find(s => s.key === 'Four')?.score).toBe(0);       // 4連続ペア無し
        expect(scores.find(s => s.key === 'HullHouse')?.score).toBe(0);  // ペア無し
    });
});