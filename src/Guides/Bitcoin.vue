<template>
    <v-container>
        <v-layout>
            <v-flex xs12>
                <v-card color="rgb(0,0,0,0)">
                    <v-card-title class="text-center">
                        <h1 class="text-center"> Bitcoin 101 </h1>
                    </v-card-title>
                        <v-img
                            src='https://i.imgur.com/wTDAH8d.png'
                            aspect-ratio="2"
                        >
                        </v-img>
                        <v-card-actions class="mt-2">
                            <v-layout row justify-start class="d-flex">
                            <v-flex xs1>
                                <v-btn flat>
                                    <v-icon class="blue--text">fab fa-twitter</v-icon>  
                                </v-btn>
                            </v-flex>
                            <v-flex xs1>
                                <v-btn flat>
                                    <v-icon class="blue--text">fab fa-facebook-square</v-icon>
                                </v-btn>
                            </v-flex>
                             <v-flex xs1>
                                <v-btn flat>
                                    <v-icon class="blue--text">fab fa-linkedin</v-icon>
                                </v-btn>
                             </v-flex>
                             <v-flex xs1>
                                <v-btn flat>
                                    <v-icon class="blue--text">fab fa-telegram-plane</v-icon>
                                </v-btn>
                             </v-flex>
                             <v-flex>
                                <v-btn flat>
                                    <v-icon class="green--text">fab fa-whatsapp</v-icon>
                                </v-btn>
                             </v-flex>
                          </v-layout>   
                        </v-card-actions>
                         
                        <v-card-text>
                            <v-layout column>
                                <h2 ml-3>Bitcoin Definition</h2>
                                <p>
                                    <a href="https://en.bitcoinwiki.org/wiki/Bitcoin" target="_blank"> Source </a>
                                </p>
                                <p class="mt-2">
                                   <a href="https://en.bitcoinwiki.org/wiki/Bitcoin" target="_blank"> 
                                        Bitcoin (BTC) 
                                   </a> is a digital currency, which is used and distributed electronically.
                                </p>
                                <p>
                                    Bitcoin is a decentralized digital currency created by an unknown person or 
                                    group of people under the name  <a href="https://en.bitcoinwiki.org/wiki/Satoshi_Nakamoto" target="_blank">Satoshi Nakamoto</a>
                                    and released as open-source software in 2009. It does not rely on a central server 
                                    to process transactions or store funds. There are a maximum of 2,099,999,997,690,000 
                                    Bitcoin elements (called Satoshis, the unit has been named in collective homage to the 
                                    original creator), which are currently most commonly measured in units of 100,000,000 
                                    known as BTC. There will only ever be <strong>21 million Bitcoin (BTC)</strong> to ever be created.
                                </p>
                                <p>
                                    As of January 2018, it is the most widely used alternative currency, now with the total market cap around 
                                    <strong>250 billion US dollars.</strong>
                                </p>
                                <p>
                                    Bitcoin has no central issuer; instead, the peer-to-peer network regulates Bitcoins,
                                     transactions and issuance according to consensus in network software. These transactions 
                                     are verified by network nodes through the use of cryptography and recorded in a public distributed 
                                     ledger called a blockchain.
                                </p>
                                <p>
                                    Bitcoins are issued to various nodes that verify transactions through computing power. It is 
                                    established that there will be a limited and scheduled release of no more than 21 million BTC 
                                    worth of coins, which will be fully issued by the year 2140.
                                </p>
                                <p>
                                    Bitcoins are created as a reward for a process known as mining. They can be exchanged for other currencies, 
                                    products, and services. As of February 2015, <a href="https://en.bitcoinwiki.org/wiki/CoinJolt" target="_blank">
                                    CoinJolt</a> provided over 100,000 merchants and vendors accepted 
                                    Bitcoin as payment. Research produced by the University of Cambridge estimates that in 2017, there were 2.9 to 5.8 million 
                                    unique users using a cryptocurrency wallet, most of them using Bitcoin.
                                </p>
                                 <v-img 
                                    src="https://i.imgur.com/20XmTwZ.jpg" 
                                    alt="Bitcoin Map"
                                    height="auto"
                                    width="500px"
                                >
                                </v-img>
                                <h2 class="mt-4">
                                    <strong>Currency</strong>
                                </h2>
                                <p class="mt-2">
                                    Alice wants to buy alpaca socks which Bob has for sale. In return, she must provide something of equal value to Bob.
                                    most efficient way to do this is by using a medium of  
                                    <a href="https://en.bitcoinwiki.org/wiki/Cryptocurrency_exchange" target="_blank">exchange </a>
                                    that Bob accepts which would be classified as currency. 
                                    Currency makes trade easier by eliminating the need for coincidence of wants required in other systems of trade such as barter.
                                    Currency adoption and acceptance can be global, national, or in some cases local or community-based.
                                </p>
                                <h2 class="mt-3">
                                    <strong>Banks</strong>
                                </h2>
                                <p class="mt-2">
                                    Alice doesn't necessarily need to be in direct contact with bob in order for the funds to be transferred. She may instead 
                                    transfer this value by first entrusting her currency to a bank who promises to store and protect Alice's currency notes. 
                                    The bank gives Alice a written promise (called a "bank statement") that entitles her to withdraw the same number of currency 
                                    bills that she deposited. Since the money is still Alice's, she is entitled to do with it whatever she pleases, and the bank 
                                    (like most banks), for a small fee, will do Alice the service of passing on the currency bills to Bob on her behalf. This is 
                                    done by Alice's bank by giving the dollar bills to Bob's bank and informing them that the money is for Bob, who will then see 
                                    the amount the next time he checks his balance or receives his bank statement.
                                </p>
                                <p class="mt-2">
                                    Since banks have many customers, and bank employees require money for doing the job of talking to people and signing documents, 
                                    banks in recent times have been using machines such as ATMs and web servers that do the job of interacting with customers instead 
                                    of paid bank employees. The task of these machines is to learn what each customer wants to do with their money and, to the extent 
                                    that it is possible, act on what the customer wants (for example, ATMs can hand out cash). Customers can always know how much money 
                                    they have in their accounts, and they are confident that the numbers they see in their bank statements and on their computer screens 
                                    accurately reflect the number of dollars that they can get from the bank on demand. They can be so sure of this that they can accept 
                                    those numbers in the same way they accept paper banknotes (this is similar to the way people started accepting paper dollars when they 
                                    had been accepting gold or silver).
                                </p>
                                <h3 class="mt-2">
                                    <strong>Such a system has several disadvantages:</strong>
                                </h3>
                                <ul class="mt-2">
                                    <li>
                                        It is costly. 
                                        <a href="https://en.wikipedia.org/wiki/Electronic_funds_transfer" target="_blank">EFTs </a> 
                                        in Europe it can cost up to 25 euros. Credit transactions may cost a significant proportion of the 
                                        <a href="https://en.bitcoinwiki.org/wiki/Transaction_confirmation" target="_blank">transaction </a>
                                        in place.
                                    </li>
                                    <li>
                                        It is slow. Checking and low-cost wire services take days to complete.
                                    </li>
                                    <li>
                                        In most cases, it cannot be anonymous.
                                    </li>
                                    <li>
                                        Accounts can be frozen, or their balance partially or wholly confiscated.
                                    </li>
                                    <li>
                                        Banks and other payment processors like 
                                        <a href="https://en.bitcoinwiki.org/wiki/PayPal" target="_blank">PayPal</a>, 
                                        Visa, and Mastercard may refuse to process payments for certain legal entities.
                                    </li>
                                </ul>
                                <h2 class="mt-3">
                                    <strong>Buying Bitcoin</strong>
                                </h2>
                                <p class="mt-2">
                                    <strong>How to buy Bitcoin? </strong> There are many ways to buy Bitcoin cryptocurrency, with debit or 
                                    credit card, PayPal, online on cryptocurrency exchange, with bank transfers and etc. 
                                    It's difficult to say what is the best way to buy Bitcoin. After the opening <strong>Bitcoin 
                                    address-account</strong> you can start buying coins.
                                </p>
                                <p class="mt-2">
                                    Buying and selling coins to individuals is carried on specialized sites, such as LocalBitcoins. 
                                    User should select the country and the city in the special window, fill in the information on the 
                                    number of coins and select the purchase payment method.
                                </p>
                                Seller should be chosen according to the grade level on the site. Purchasing Bitcoins at the unaccredited 
                                sites or from individuals is not recommended due to the <strong>high fraud risk</strong>.
                                <h2 class="mt-2">
                                    <strong>Creation of coins</strong>
                                </h2>
                                <p class="mt-2">
                                    The creation of coins must be limited for the currency to have any value.
                                </p>
                                <p>
                                    New coins are slowly 
                                    <a href="https://en.bitcoinwiki.org/wiki/Bitcoin_mining" target="_blank">mined</a> 
                                    into existence by following a mutually agreed-upon set of rules. A user mining 
                                    bitcoins is running a software program that searches tirelessly for a solution 
                                    to a very difficult math problem whose 
                                    <a href="https://en.bitcoinwiki.org/wiki/Difficulty_in_Mining" target="_blank">difficulty</a>
                                     is precisely known. The difficulty is automatically adjusted regularly so that 
                                    the number of solutions found globally, by everyone, for a given unit of time is constant: an average of 6 
                                    per hour. When a solution is found, the user may tell everyone of the existence of this newly found solution, 
                                    along with other information, packaged together in what is called a 
                                    "<a href="https://en.bitcoinwiki.org/wiki/Block" target="_blank">block</a>".
                                </p>
                                <p class="mt-2">
                                    Blocks create 12.5 new bitcoins at present. This amount, known as the block reward, is an incentive for people 
                                    to perform the computation work required for generating blocks. Every 
                                    <a href="https://www.bitcoinblockhalf.com/" target="_blank">210,000 new blocks generated </a> (roughly every 4 years), 
                                    the number of bitcoins that can be "mined" in a block reduces by 50%. Originally the block reward was 50 bitcoins; 
                                    it halved in November 2012 and then once more in July 2016. Any block that is created by a malicious user that does not 
                                    follow this rule (or any other rules) will be rejected by everyone else. In the end, no more than 21 million bitcoins will 
                                    ever exist.
                                </p>
                                <p>
                                    Because the block reward will decrease over the long term, miners will some day instead pay for their hardware and electricity 
                                    costs by collecting 
                                    <a href="https://en.bitcoinwiki.org/wiki/Transaction_commission" target="_blank">transaction fees </a>. 
                                    The sender of money may voluntarily pay a small transaction fee which will be kept by whoever 
                                    finds the next block. Paying this fee will encourage miners to include the transaction in a block more quickly.
                                </p>
                                <h2>
                                    <strong>Bitcoin Mining</strong>
                                </h2>
                                <p class="mt-2">
                                    Bitcoin Mining is the process of adding transaction records to Bitcoin's public 
                                    <a href="https://en.bitcoinwiki.org/wiki/Ledger" target="_blank">ledger</a> of past transactions (and a mining rig is 
                                    a colloquial metaphor for a single computer system that performs the necessary computations for mining). This ledger of past 
                                    transactions is called the block chain as it is a chain of blocks. The block chain serves to confirm transactions to the rest of 
                                    the network as having taken place. Bitcoin nodes use the block chain to distinguish legitimate Bitcoin transactions from attempts 
                                    to re-spend coins that have already been spent elsewhere.
                                </p>
                                <p class="mt-2">
                                    Bitcoin mining' is intentionally designed to be resource-intensive and difficult so that the number of blocks found each day by 
                                    miners remains steady. Individual blocks must contain a proof of work to be considered valid. This proof of work is verified by 
                                    other Bitcoin nodes each time they receive a block. Bitcoin uses the hashcash proof-of-work function.
                                </p>
                                <p class="mt-2">
                                    The primary purpose of mining is to allow Bitcoin nodes to reach a secure, tamper-resistant consensus. Bitcoin Mining is also the 
                                    mechanism used to introduce Bitcoins into the system: Miners are paid any transaction fees as well as a subsidy of newly created 
                                    coins. This both serves the purpose of disseminating new coins in a decentralized manner as well as motivating people to provide 
                                    security for the system.
                                </p>
                                <p class="mt-2">
                                    Bitcoin mining is so called because it resembles the mining of other commodities: it requires exertion and it slowly makes new 
                                    currency available at a rate that resembles the rate at which commodities like gold are mined from the ground.
                                </p>
                                <h2 class="mt-2">
                                    <strong>Sending payments</strong>
                                </h2>
                                <p class="mt-2">
                                    To guarantee that a third-party, let's call her Eve, cannot spend other people's bitcoins by creating transactions in their names, 
                                    Bitcoin uses 
                                    <a href="https://en.bitcoinwiki.org/wiki/Bitcoin_address" target="_blank">public key cryptography</a>
                                     to make and verify digital signatures. In this system, each person, such as Alice or Bob, has 
                                    one or more addresses each with an associated pair of 
                                    <strong>public and</strong> <a href="https://en.bitcoinwiki.org/wiki/Bitcoin_address" target="_blank"> private keys</a> 
                                    that they may hold in a 
                                    <a href="https://en.bitcoinwiki.org/wiki/Bitcoin_wallet" target="_blank">wallet</a>. Only the user with 
                                    the private key can sign a transaction to give some of their bitcoins to somebody else, but anyone can validate the signature using 
                                    that user’s public key.
                                </p>
                                <p class="mt-2">
                                    <strong>Suppose Alice wants to send a bitcoin to Bob.</strong>
                                </p>
                                <ul>
                                    <li>Bob sends his address to Alice.</li>
                                    <li>Alice adds Bob’s address and the amount of bitcoins to transfer to a message: a 'transaction' message.</li>
                                    <li>Alice signs the transaction with her private key, and announces her public key for signature verification.</li>
                                    <li>Alice broadcasts the transaction on the Bitcoin 
                                        <a href="https://en.bitcoinwiki.org/wiki/Network" target="_blank">network</a>
                                         for all to see.
                                    </li>
                                </ul>
                                <p class="mt-2">
                                    (Only the first two steps require human action. The rest is done by the Bitcoin client software.)
                                </p>
                                <p class="mt-2">
                                    Looking at this transaction from the outside, anyone who knows that these addresses belong to 
                                    Alice and Bobcan see that Alice has agreed to transfer the amount to Bob, because nobody else 
                                    has Alice's private key. Alice would be foolish to give her private key to other people, 
                                    as this would allow them to sign transactions in her name, removing funds from her control.
                                </p>
                                <p class="mt-2">
                                    Later on, when Bob wishes to transfer the same bitcoins to Charlie, he will do the same thing:
                                </p>
                                <ul class="mt-1">
                                    <li>
                                        Charlie sends Bob his address.
                                    </li>
                                    <li>
                                        Bob adds Charlie's address and the amount of bitcoins to transfer to a message: a 'transaction' message.
                                    </li>
                                    <li>
                                        Bob signs the transaction with his private key, and announces his public key for signature verification.
                                    </li>
                                    <li>
                                        Bob broadcasts the transaction on the 
                                        <a href="https://en.bitcoinwiki.org/wiki/Bitcoin_network" target="_blank">Bitcoin network</a>
                                         for all to see.
                                    </li>
                                </ul>
                                <p class="mt-3">
                                    Only Bob can do this because only he has the private key that can create a valid signature for the transaction.
                                </p>
                                <p>
                                    Eve cannot <a href="https://en.bitcoinwiki.org/wiki/Change" target="_blank">
                                    change</a> whose coins these are by replacing Bob’s address with her address, because Alice signed the 
                                    transfer to Bob using her own private key, which is kept secret from Eve, and instructing that the coins which 
                                    were hers now belong to Bob. So if Charlie accepts that the original coin was in the hands of Alice, he will also 
                                    accept the fact that this coin was later passed to Bob, and now Bob is passing this same coin to him.
                                </p>
                                <h2 class="mt-2">
                                    <strong>Preventing <a class="textDeco" href="https://en.bitcoinwiki.org/wiki/Double-spending">double-spending</a></strong>
                                </h2>
                                <p class="mt-2">
                                    The process described above does not prevent Alice from using the same bitcoins in more than one transaction. The following 
                                    process does; this is the primary innovation behind Bitcoin.
                                </p>
                                <ul>
                                    <li>
                                        Details about the transaction are sent and forwarded to all or as many other computers as possible.
                                    </li>
                                    <li>
                                        A constantly growing chain of blocks that contains a record of all transactions is collectively 
                                        maintained by all computers (each has a full copy).
                                    </li>
                                    <li>
                                        To be accepted in the chain, transaction blocks must be valid and must include proof-of-work 
                                        (one block generated by the network every 10 minutes).
                                    </li>
                                    <li>
                                        Blocks are chained in a way so that, if any one is modified, all following blocks will have to be recomputed.
                                    </li>
                                    <li>
                                        When multiple valid continuations to this chain appear, only the longest such branch is accepted and it is 
                                        then extended further.
                                    </li>
                                </ul>
                                <p class="mt-3">
                                    When Bob sees that his transaction has been included in a block, which has been made part of the single longest 
                                    and fastest-growing blockchain (extended with significant computational effort), he can be confident that the 
                                    transaction by Alice has been accepted by the computers in the network and is permanently recorded, preventing 
                                    Alice from creating a second transaction with the same coin. In order for Alice to thwart this system and double-spend 
                                    her coins, she would need to muster more computing power than all other Bitcoin users combined.
                                </p>
                                <h2 class="mt-3">
                                    <strong>Anonymity</strong>
                                </h2>
                                <p class="mt-2">
                                    When it comes to the <strong>Bitcoin network</strong> itself, there are no "accounts" to set up, and no e-mail addresses, 
                                    user-names or passwords are required to hold or spend bitcoins. Each balance is simply associated with an address 
                                    and its public-private key pair. The money "belongs" to anyone who has the private key and can sign transactions with it. 
                                    Moreover, those keys do not have to be registered anywhere in advance, as they are only used when required for a 
                                    transaction. Transacting parties do not need to know each other's identity in the same way that a store owner does 
                                    not know a cash-paying customer's name.
                                </p>
                                <p class="mt-2">
                                    A Bitcoin address mathematically corresponds to a public key and looks like this:
                                </p>
                                <h4 class="ml-4 mt-2">
                                    1PHYrmdJ22MKbJevpb3MBNpVckjZHt89hz
                                </h4>
                                <p class="mt-3">
                                    Each person can have many such addresses, each with its own balance, which makes it very difficult to know which 
                                    person owns what amount. In order to protect his privacy, Bob can generate a new public-private key pair for each 
                                    individual receiving transaction and the Bitcoin software encourages this behavior by default. Continuing the example 
                                    from above, when Charlie receives the bitcoins from Bob, Charlie will not be able to identify who owned the bitcoins before Bob.
                                </p>
                                <h2>
                                    <strong>Whitepaper</strong>
                                </h2>
                                <p class="mt-2">
                                    Bitcoin WhitePaper (WP) is a document that helps your prospective customer make an informed decision in favor of your 
                                    company or a specific product. If the document does not facilitate a decision, it may be anything but not WP. Speaking 
                                    in the most understandable language, white paper is something between an article and an advertising brochure. The document 
                                    contains quite useful information and at the same time leads to the fact that the best solution is to purchase a certain 
                                    product or service. You can read English (Original) Bitcoin White Paper 
                                    <a href="https://bitcoin.org/bitcoin.pdf" target="_blank">here</a>.
                                </p>
                            </v-layout>                   
                        </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
export default {
    

}
</script>

<style scoped>
.textDeco{
    text-decoration: none;
}
</style>